class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          $or: [
            { name: { $regex: this.queryStr.keyword, $options: "i" } },
            { description: { $regex: this.queryStr.keyword, $options: "i" } },
            { category: { $regex: this.queryStr.keyword, $options: "i" } },
          ],
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    const removeFields = ["keyword", "page", "limit", "sort"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // Extract category filter BEFORE JSON.stringify to prevent RegExp corruption
    let categoryFilter = null;
    if (queryCopy.category && String(queryCopy.category).trim() !== "") {
      const cat = String(queryCopy.category).toLowerCase().trim();
      delete queryCopy.category;

      let matchRegexes = [new RegExp(`^${cat}$`, "i")];
      if (cat === "mobiles" || cat === "smartphones") {
        matchRegexes = [/^SmartPhones$/i, /^Mobiles$/i];
      } else if (cat === "electronics" || cat === "laptop" || cat === "camera") {
        matchRegexes = [/^Laptop$/i, /^Camera$/i, /^Electronics$/i];
      } else if (cat === "fashion" || cat === "attire" || cat === "tops" || cat === "bottom") {
        matchRegexes = [/^Attire$/i, /^Tops$/i, /^Bottom$/i, /^Fashion$/i];
      } else if (cat === "home" || cat === "appliances") {
        matchRegexes = [/^Appliances$/i, /^Home$/i, /^Tops$/i];
      } else if (cat === "beauty") {
        matchRegexes = [/^Beauty$/i];
      } else if (cat === "footwear") {
        matchRegexes = [/^Footwear$/i];
      }

      categoryFilter = { category: { $in: matchRegexes } };
    }

    // Filter For Price and Rating (Convert strings to Numbers for MongoDB comparison)
    if (queryCopy.price) {
      if (queryCopy.price.gte !== undefined) queryCopy.price.gte = Number(queryCopy.price.gte);
      if (queryCopy.price.lte !== undefined) queryCopy.price.lte = Number(queryCopy.price.lte);
      if (queryCopy.price.gt !== undefined) queryCopy.price.gt = Number(queryCopy.price.gt);
      if (queryCopy.price.lt !== undefined) queryCopy.price.lt = Number(queryCopy.price.lt);
    }

    if (queryCopy.ratings) {
      if (queryCopy.ratings.gte !== undefined) queryCopy.ratings.gte = Number(queryCopy.ratings.gte);
      if (queryCopy.ratings.lte !== undefined) queryCopy.ratings.lte = Number(queryCopy.ratings.lte);
    }

    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    const finalQuery = JSON.parse(queryStr);
    if (categoryFilter) {
      Object.assign(finalQuery, categoryFilter);
    }

    this.query = this.query.find(finalQuery);

    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortType = this.queryStr.sort;
      if (sortType === "price_asc") {
        this.query = this.query.sort({ price: 1 });
      } else if (sortType === "price_desc") {
        this.query = this.query.sort({ price: -1 });
      } else if (sortType === "rating_desc") {
        this.query = this.query.sort({ ratings: -1 });
      } else if (sortType === "newest") {
        this.query = this.query.sort({ createdAt: -1 });
      }
    } else {
      this.query = this.query.sort({ createdAt: -1 });
    }
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = ApiFeatures;
