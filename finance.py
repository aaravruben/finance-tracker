import json
import os
from datetime import datetime

DATA_FILE = "data.json"


def load_data():
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r") as f:
        return json.load(f)


def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)


def add_transaction():
    data = load_data()

    t_type = input("Type (income/expense): ").lower()
    amount = float(input("Amount: "))
    category = input("Category: ")
    note = input("Note: ")

    transaction = {
        "type": t_type,
        "amount": amount,
        "category": category,
        "note": note,
        "date": datetime.now().strftime("%Y-%m-%d %H:%M")
    }

    data.append(transaction)
    save_data(data)

    print("Transaction added!")


def view_transactions():
    data = load_data()

    if not data:
        print("No transactions yet.")
        return

    for t in data:
        print(f"{t['date']} | {t['type']} | ${t['amount']} | {t['category']} | {t['note']}")


def view_balance():
    data = load_data()

    balance = 0

    for t in data:
        if t["type"] == "income":
            balance += t["amount"]
        else:
            balance -= t["amount"]

    print(f"Current Balance: ${balance:.2f}")


def main():
    while True:
        print("\n--- Finance Tracker ---")
        print("1. Add Transaction")
        print("2. View Transactions")
        print("3. View Balance")
        print("4. Exit")

        choice = input("Select option: ")

        if choice == "1":
            add_transaction()
        elif choice == "2":
            view_transactions()
        elif choice == "3":
            view_balance()
        elif choice == "4":
            break
        else:
            print("Invalid choice")


if __name__ == "__main__":
    main()
