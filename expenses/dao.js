import ExpenseModel from "./model.js";

export const createExpense = (expense) => ExpenseModel.create(expense);
export const findAllExpenses = () => ExpenseModel.find();
export const findExpenseById = (id) => ExpenseModel.findById(id);
export const updateExpense = (id, expense) =>
    ExpenseModel.updateOne({ _id: id }, { $set: expense });
export const deleteExpense = (id) => ExpenseModel.deleteOne({ _id: id });