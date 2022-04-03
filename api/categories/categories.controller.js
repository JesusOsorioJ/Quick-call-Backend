const {
    AllCategories,
    CreateCategories,
    EditCategories
}=require("./categories.service")

async function handlerCategories(req, res) {
    const {filter ,type} = req.query;
    try{
      const Categories = await AllCategories (filter, type);
      res.status(200).json(Categories);
    } catch(error) {
      res.status(404).json({ message: `Categories not found with this ${filter}` });
    }
  }

  async function handlerCreateCategories(req, res) {
    const newCategories = req.body;
    const Categories = await CreateCategories(newCategories);
    return res.status(201).json(Categories);
  }

  async function   handlerEditCategories (req, res) {
    const EditeCategories = req.body;
    const {id} = req.params

    try {
      const Categories = await EditCategories (id, EditeProfessional);
      return res.status(201).json(Categories);
    } catch (error) {
      return res.status(404).json({ message: `Categories not found with id: ${id}` });
    }

   }


module.exports ={
  handlerCategories,
  handlerCreateCategories,
  handlerEditCategories
}
