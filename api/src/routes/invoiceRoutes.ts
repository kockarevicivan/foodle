import express from "express";

import InvoiceController from "../controllers/InvoiceController";

const router = express.Router();

router.get("/:invoiceId", InvoiceController.getById);
router.post("/:invoiceId", InvoiceController.upload);
router.post("/sendInvoice", InvoiceController.send);

export default router;
