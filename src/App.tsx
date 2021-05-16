import { useState } from "react";
import Modal from "react-modal";
import { TransactionProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransacrionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionNewModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseTransactionNewModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenTransactionNewModal} />
      <Dashboard />
      <NewTransacrionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionNewModal}
      />
    </TransactionProvider>
  );
}
