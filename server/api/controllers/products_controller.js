// const productModel = require('./models/Products');

// module.exports = {
//   getById: (req, res, next) => {
//     console.log(req.body);
//     productModel.findById(req.params.productId, (err, productInfo) => {
//       if (err) {
//         next(err);
//       } else {
//         res.json({
//           status: 'success',
//           message: 'Product found!!!',
//           data: { product: productInfo },
//         });
//       }
//     });
//   },

//   getAll: (req, res, next) => {
//     let productList = [];

//     movieModel.find({}, (err, products) => {
//       if (err) {
//         next(err);
//       } else {
//         for (let product of Products) {
//           productList.push({
//             id: product._id,
//             name: product.name,
//             description: product.description,
//             price: product.price,
//           });
//         }
//       }
//     });
//   },
// };

const productModel = require('./models/Products');
const Products = require('./models/Products');

module.exports = {
  getById: (req, res, next) => {
    console.log(req.body);
    productModel.findById(req.params.productId, (err, productInfo) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: 'success',
          message: 'Product found!!!',
          data: { prodcuts: productInfo },
        });
      }
    });
  },
  getAll: (req, res, next) => {
    let productsList = [];

    productModel.find({}, (err, product) => {
      if (err) {
        next(err);
      } else {
        for (let product of Products) {
          productsList.push({
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
          });
        }
        res.json({
          status: 'success',
          message: 'Product list found!!!',
          data: { products: productsList },
        });
      }
    });
  },
  updateById: (req, res, next) => {
    productModel.findByIdAndUpdate(
      req.params.productId,
      { name: req.body.name },
      (err, productInfo) => {
        if (err) next(err);
        else {
          res.json({
            status: 'success',
            message: 'Product updated successfully!!!',
            data: null,
          });
        }
      }
    );
  },
  deleteById: (req, res, next) => {
    productModel.findByIdAndRemove(req.params.movieId, (err, productInfo) => {
      if (err) next(err);
      else {
        res.json({
          status: 'success',
          message: 'Product deleted successfully!!!',
          data: null,
        });
      }
    });
  },
  create: (req, res, next) => {
    productModel.create(
      { name: req.body.name, description: req.body.description, price:req.body.price },
       (err, result) => {
        if (err) next(err);
        else {
          res.json({
            status: 'success',
            message: 'Product added successfully!!!',
            data: null,
          });
        }
      }
    );
  },
};
