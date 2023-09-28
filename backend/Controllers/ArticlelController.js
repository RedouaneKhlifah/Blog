import asynchandler from "express-async-handler";
import ArticalModel from "../models/ArticleModel.js";

/**
 * @desc Get all articals
 * @route GET /artical
 * @access public
 */
const fetchArticals = asynchandler(async (req, res) => {
  const articals = await ArticalModel.getAllArticals();
  res.status(200).json(articals);
});

/**
 * @desc Get one articals
 * @route GET /artical/:id
 * @access public
 */
const fetchArtical = asynchandler(async (req, res) => {
  const id = req.params.id;
  const artical = await ArticalModel.getOneArtical(id);
  res.status(200).json(artical);
});

/**
 * @desc Create new artical
 * @route POST /artical
 * @access public
 */
const createArtical = asynchandler(async (req, res) => {
  console.log(req.body);
  const { title, body, image } = req.body;

  const data = {
    title: title,
    body: body,
  };
  const artical = await ArticalModel.createArtical(data);
  res.status(201).json(artical);
});

/**
 * @desc Update artical
 * @route PATCH /artical/:id
 * @access public
 */
const updateArtical = asynchandler(async (req, res) => {
  const id = req.params.id;
  const { title, body } = req.body;

  const data = {
    title: title,
    body: body,
  };
  const artical = await ArticalModel.updateArtical(id, data);
  res.status(200).json(artical);
});

/**
 * @desc Delete artical
 * @route DELETE /artical/:id
 * @access public
 */
const deleteArtical = asynchandler(async (req, res) => {
  const id = req.params.id;
  const artical = await ArticalModel.DeleteArtical(id);
});

// search fio artical by title
const search = asynchandler(async (req, res) => {});

export {
  fetchArticals,
  fetchArtical,
  createArtical,
  updateArtical,
  deleteArtical,
  search,
};
