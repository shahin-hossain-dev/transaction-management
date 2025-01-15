import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import TransactionModal from "./TransactionModal";
import { useState } from "react";
import { TransactionData } from "@/types/Transaction";
import { Badge } from "@mui/material";

type TransactionProps = {
  transactionData: TransactionData[];
};

const TransactionTable: React.FC<TransactionProps> = ({ transactionData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<TransactionData>();

  const handleModal = (singleData: TransactionData) => {
    setModalOpen(true);
    setModalData(singleData);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1976d2" }}>
              <TableCell sx={{ color: "#ffffff", fontWeight: "600" }}>
                Name/Business
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#ffffff", fontWeight: "600" }}
              >
                Trans.ID
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#ffffff", fontWeight: "600" }}
              >
                Email
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#ffffff", fontWeight: "600" }}
              >
                Date
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#ffffff", fontWeight: "600" }}
              >
                Amount
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#ffffff", fontWeight: "600" }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((row) => (
              <TableRow
                key={row.id}
                hover={true}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => handleModal(row)}
              >
                <TableCell component="th" scope="row">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image
                        src={row.image}
                        alt={row.id}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>{row.name}</div>
                  </div>
                </TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  ${row.amount}
                </TableCell>
                <TableCell align="center">
                  <span className="me-3">
                    <Badge
                      color={
                        row.status === "approved"
                          ? "success"
                          : `${row.status === "pending" ? "warning" : "error"}`
                      }
                      variant="dot"
                    ></Badge>
                  </span>
                  <span>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TransactionModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalData={modalData}
      />
    </div>
  );
};
export default TransactionTable;
