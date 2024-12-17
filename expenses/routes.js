import * as dao from "./dao.js";

function ExpenseRoutes(app) {
    // 获取所有消费记录
    app.get("/expenses", async (req, res) => {
        const expenses = await dao.findAllExpenses();
        res.json(expenses);
    });

    // 获取单个消费记录
    app.get("/expenses/:id", async (req, res) => {
        const expense = await dao.findExpenseById(req.params.id);
        res.json(expense);
    });

    // 创建新的消费记录
    app.post("/expenses", async (req, res) => {
        const expense = await dao.createExpense(req.body);
        res.json(expense);
    });

    // 更新消费记录
    app.put("/expenses/:id", async (req, res) => {
        const status = await dao.updateExpense(req.params.id, req.body);
        res.json(status);
    });

    // 删除消费记录
    app.delete("/expenses/:id", async (req, res) => {
        const status = await dao.deleteExpense(req.params.id);
        res.json(status);
    });
}

export default ExpenseRoutes;
