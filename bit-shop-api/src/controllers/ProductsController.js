// traer el modelo de datos
const Product = require("../Models/Product");

// const productsControllers = ()

// productsControllers.getProducts = () => {}

// otras formas que se pueden encontrar
// export functitona (){}
// export const b = () => {}

// mostrar los productos creados en la base de datos
const getProducts = async (req, res) => {
  const products = await Product.find();
  //console.log(req.params, req.query)
  res.status(200).json(products);
};

const getOneProduct = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = await Product.findById(id);
    res.status(200).json(product ? product : "El producto no existe");
  } catch (error) {
    res.status(200).json({ msj: "Error al consultar el id", error });
  }
};
//crear un producto en la base de datos
const createProducts = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ status: "Producto creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "Producto no creado correctamente", error });
  }
};
//   const { name, price, availableElements, description, image, tags } = req.body;

//   const product = new Product({
//     name,
//     price,
//     availableElements,
//     description,
//     image,
//     tags,
//   });

//   res.status(201).json({ status: "Producto creado correctamente" });
// };

const updateProducts = async (req, res) => {
  const id = req.params.productId;
  const updated = await Product.findByIdAndUpdate(id, { $set: req.body });
  res.status(201).json(updated);
};

const deleteProduct = async (req, res) => {
  const id = req.params.productId;
  await Product.findByIdAndDelete(id);
  res.status(200).json({ msj: "Producto eliminado" });
};

const manyProducts = async (req, res) => {
  try {
    for (let product of req.body) {
      const insertion = new Product(product);
      await insertion.save();
    }
    res.status(201).json("Elementos creados correctamente");
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  getOneProduct,
  deleteProduct,
  manyProducts,
};
