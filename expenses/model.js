import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    date: { type: Date},
    amount: { type: Number, required: true },
    currency: { type: String, enum: ['USD', 'MXN'], default: 'USD' },
    description: { type: String},
    payer: { type: String, required: true },
    participants: [{ type: String }],
    
}, {
    collection: "expenses"
});

const ExpenseModel = mongoose.model("Expense", expenseSchema);
export default ExpenseModel;