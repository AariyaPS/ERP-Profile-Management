import { useMemo, useState } from "react";

function Finance() {
    const [activeTab, setActiveTab] = useState("overview");

    // Sample finance data
    const transactions = [
        {
            id: 1,
            date: "02 Sep 2026",
            description: "Office Rent",
            category: "Expense",
            amount: 85000,
            status: "Paid",
        },
        {
            id: 2,
            date: "03 Sep 2026",
            description: "Client Payment - ABC Technologies",
            category: "Income",
            amount: 250000,
            status: "Received",
        },
        {
            id: 3,
            date: "04 Sep 2026",
            description: "Software Subscription",
            category: "Expense",
            amount: 25000,
            status: "Paid",
        },
        {
            id: 4,
            date: "05 Sep 2026",
            description: "Client Payment - XYZ Solutions",
            category: "Income",
            amount: 180000,
            status: "Received",
        },
        {
            id: 5,
            date: "06 Sep 2026",
            description: "Travel Expenses",
            category: "Expense",
            amount: 32000,
            status: "Pending",
        },
    ];

    const invoices = [
        {
            id: "INV-1001",
            client: "ABC Technologies",
            date: "01 Sep 2026",
            dueDate: "15 Sep 2026",
            amount: 250000,
            status: "Paid",
        },
        {
            id: "INV-1002",
            client: "XYZ Solutions",
            date: "02 Sep 2026",
            dueDate: "16 Sep 2026",
            amount: 180000,
            status: "Paid",
        },
        {
            id: "INV-1003",
            client: "Global Systems",
            date: "05 Sep 2026",
            dueDate: "20 Sep 2026",
            amount: 125000,
            status: "Pending",
        },
        {
            id: "INV-1004",
            client: "TechNova Pvt Ltd",
            date: "06 Sep 2026",
            dueDate: "21 Sep 2026",
            amount: 95000,
            status: "Overdue",
        },
    ];

    const expenses = [
        {
            id: "EXP-1001",
            date: "02 Sep 2026",
            category: "Office Rent",
            description: "Monthly office rent",
            amount: 85000,
            status: "Paid",
        },
        {
            id: "EXP-1002",
            date: "04 Sep 2026",
            category: "Software",
            description: "ERP software subscription",
            amount: 25000,
            status: "Paid",
        },
        {
            id: "EXP-1003",
            date: "06 Sep 2026",
            category: "Travel",
            description: "Business travel expenses",
            amount: 32000,
            status: "Pending",
        },
    ];

    const totalIncome = useMemo(
        () =>
            transactions
                .filter((transaction) => transaction.category === "Income")
                .reduce((total, transaction) => total + transaction.amount, 0),
        []
    );

    const totalExpenses = useMemo(
        () =>
            transactions
                .filter((transaction) => transaction.category === "Expense")
                .reduce((total, transaction) => total + transaction.amount, 0),
        []
    );

    const outstandingInvoices = useMemo(
        () =>
            invoices
                .filter((invoice) => invoice.status !== "Paid")
                .reduce((total, invoice) => total + invoice.amount, 0),
        []
    );

    const netBalance = totalIncome - totalExpenses;

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "Paid":
            case "Received":
                return "badge bg-success";

            case "Pending":
                return "badge bg-warning text-dark";

            case "Overdue":
                return "badge bg-danger";

            default:
                return "badge bg-secondary";
        }
    };

    return (
        <div>
            {/* PAGE HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Finance</h2>

                    <p className="text-muted mb-0">
                        Manage financial transactions, invoices and expenses
                    </p>
                </div>

                <button
                    className="btn btn-primary"
                    onClick={() => alert("Add Transaction feature coming soon")}
                >
                    + Add Transaction
                </button>
            </div>

            {/* FINANCE SUMMARY */}
            <div className="row g-4 mb-4">

                {/* Income */}
                <div className="col-md-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-2">
                                Total Income
                            </p>

                            <h3 className="mb-1">
                                {formatCurrency(totalIncome)}
                            </h3>

                            <small className="text-success">
                                +12.5% from last month
                            </small>
                        </div>
                    </div>
                </div>

                {/* Expenses */}
                <div className="col-md-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-2">
                                Total Expenses
                            </p>

                            <h3 className="mb-1">
                                {formatCurrency(totalExpenses)}
                            </h3>

                            <small className="text-danger">
                                +5.2% from last month
                            </small>
                        </div>
                    </div>
                </div>

                {/* Balance */}
                <div className="col-md-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-2">
                                Net Balance
                            </p>

                            <h3 className="mb-1">
                                {formatCurrency(netBalance)}
                            </h3>

                            <small className="text-success">
                                Healthy balance
                            </small>
                        </div>
                    </div>
                </div>

                {/* Outstanding */}
                <div className="col-md-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-2">
                                Outstanding Invoices
                            </p>

                            <h3 className="mb-1">
                                {formatCurrency(outstandingInvoices)}
                            </h3>

                            <small className="text-warning">
                                Requires attention
                            </small>
                        </div>
                    </div>
                </div>

            </div>

            {/* TABS */}
            <div className="card shadow-sm mb-4">
                <div className="card-body p-0">

                    <ul className="nav nav-tabs px-3">

                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === "overview"
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("overview")}
                            >
                                Overview
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === "transactions"
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("transactions")}
                            >
                                Transactions
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === "invoices"
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("invoices")}
                            >
                                Invoices
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === "expenses"
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("expenses")}
                            >
                                Expenses
                            </button>
                        </li>

                    </ul>
                </div>
            </div>

            {/* ================================
                OVERVIEW
            ================================= */}

            {activeTab === "overview" && (
                <div className="row g-4">

                    <div className="col-md-8">
                        <div className="card shadow-sm h-100">

                            <div className="card-header bg-orange-light">
                                <h5 className="mb-0">
                                    Recent Transactions
                                </h5>
                            </div>

                            <div className="card-body">

                                <div className="table-responsive">

                                    <table className="table table-hover align-middle">

                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Description</th>
                                                <th>Category</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {transactions.map(
                                                (transaction) => (
                                                    <tr key={transaction.id}>

                                                        <td>
                                                            {transaction.date}
                                                        </td>

                                                        <td>
                                                            {
                                                                transaction.description
                                                            }
                                                        </td>

                                                        <td>
                                                            {transaction.category}
                                                        </td>

                                                        <td>
                                                            <strong>
                                                                {formatCurrency(
                                                                    transaction.amount
                                                                )}
                                                            </strong>
                                                        </td>

                                                        <td>
                                                            <span
                                                                className={getStatusClass(
                                                                    transaction.status
                                                                )}
                                                            >
                                                                {
                                                                    transaction.status
                                                                }
                                                            </span>
                                                        </td>

                                                    </tr>
                                                )
                                            )}

                                        </tbody>

                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* QUICK SUMMARY */}

                    <div className="col-md-4">

                        <div className="card shadow-sm">

                            <div className="card-header bg-orange-light">
                                <h5 className="mb-0">
                                    Financial Summary
                                </h5>
                            </div>

                            <div className="card-body">

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Total Income</span>

                                    <strong className="text-success">
                                        {formatCurrency(totalIncome)}
                                    </strong>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Total Expenses</span>

                                    <strong className="text-danger">
                                        {formatCurrency(totalExpenses)}
                                    </strong>
                                </div>

                                <hr />

                                <div className="d-flex justify-content-between">
                                    <strong>Net Balance</strong>

                                    <strong>
                                        {formatCurrency(netBalance)}
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            )}

            {/* ================================
                TRANSACTIONS
            ================================= */}

            {activeTab === "transactions" && (
                <div className="card shadow-sm">

                    <div className="card-header bg-orange-light">
                        <h5 className="mb-0">
                            All Transactions
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {transactions.map(
                                        (transaction) => (
                                            <tr key={transaction.id}>

                                                <td>
                                                    {transaction.date}
                                                </td>

                                                <td>
                                                    {transaction.description}
                                                </td>

                                                <td>
                                                    <span
                                                        className={
                                                            transaction.category ===
                                                            "Income"
                                                                ? "badge bg-success"
                                                                : "badge bg-danger"
                                                        }
                                                    >
                                                        {
                                                            transaction.category
                                                        }
                                                    </span>
                                                </td>

                                                <td>
                                                    <strong>
                                                        {formatCurrency(
                                                            transaction.amount
                                                        )}
                                                    </strong>
                                                </td>

                                                <td>
                                                    <span
                                                        className={getStatusClass(
                                                            transaction.status
                                                        )}
                                                    >
                                                        {
                                                            transaction.status
                                                        }
                                                    </span>
                                                </td>

                                            </tr>
                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>
            )}

            {/* ================================
                INVOICES
            ================================= */}

            {activeTab === "invoices" && (
                <div className="card shadow-sm">

                    <div className="card-header bg-orange-light">
                        <h5 className="mb-0">
                            Invoices
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>
                                    <tr>
                                        <th>Invoice ID</th>
                                        <th>Client</th>
                                        <th>Invoice Date</th>
                                        <th>Due Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {invoices.map((invoice) => (
                                        <tr key={invoice.id}>

                                            <td>
                                                <strong>
                                                    {invoice.id}
                                                </strong>
                                            </td>

                                            <td>
                                                {invoice.client}
                                            </td>

                                            <td>
                                                {invoice.date}
                                            </td>

                                            <td>
                                                {invoice.dueDate}
                                            </td>

                                            <td>
                                                <strong>
                                                    {formatCurrency(
                                                        invoice.amount
                                                    )}
                                                </strong>
                                            </td>

                                            <td>
                                                <span
                                                    className={getStatusClass(
                                                        invoice.status
                                                    )}
                                                >
                                                    {invoice.status}
                                                </span>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>
            )}

            {/* ================================
                EXPENSES
            ================================= */}

            {activeTab === "expenses" && (
                <div className="card shadow-sm">

                    <div className="card-header bg-orange-light">
                        <h5 className="mb-0">
                            Expense Management
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>
                                    <tr>
                                        <th>Expense ID</th>
                                        <th>Date</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {expenses.map((expense) => (
                                        <tr key={expense.id}>

                                            <td>
                                                <strong>
                                                    {expense.id}
                                                </strong>
                                            </td>

                                            <td>
                                                {expense.date}
                                            </td>

                                            <td>
                                                {expense.category}
                                            </td>

                                            <td>
                                                {expense.description}
                                            </td>

                                            <td>
                                                <strong>
                                                    {formatCurrency(
                                                        expense.amount
                                                    )}
                                                </strong>
                                            </td>

                                            <td>
                                                <span
                                                    className={getStatusClass(
                                                        expense.status
                                                    )}
                                                >
                                                    {expense.status}
                                                </span>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}

export default Finance;                    