import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IoMdClose } from "react-icons/io";
import { TransactionData } from "@/types/Transaction";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px !important",
  boxShadow: 24,
  p: 4,
  outline: 0,
};

type ModalProps = {
  modalOpen: boolean;
  modalData: TransactionData | undefined;
  setModalOpen: (action: boolean) => void;
  handleUpdate: () => void;
  handleRejected: () => void;
};

const TransactionModal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  modalData,
  handleUpdate,
  handleRejected,
}) => {
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-between">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="!font-medium"
            >
              Approval
            </Typography>
            <button onClick={handleClose}>
              <IoMdClose className="text-xl" />
            </button>
          </div>
          <div className="px-2 py-3 space-y-5">
            <div className="flex gap-3 justify-between">
              <div>
                <p className="text-lg font-medium text-zinc-900 mb-2">From:</p>
                <p className="">example@gmail.com</p>
              </div>
              <div>
                <p className="text-lg font-medium mb-2 text-zinc-900 ">
                  Transaction Id:
                </p>
                <p className="bg-green-100 px-2 rounded">{modalData?.id}</p>
              </div>
            </div>
            <div className="flex gap-3 justify-between">
              <div>
                <p className="text-lg font-medium text-zinc-900 mb-2">
                  Amount:
                </p>
                <p className="">${modalData?.amount}</p>
              </div>
              <div>
                <p className="text-lg font-medium mb-2 text-zinc-900">Date:</p>
                <p className="">2025-01-15</p>
              </div>
            </div>
            {modalData?.status === "pending" ? (
              <div className="flex gap-3 justify-between">
                <div className="w-full">
                  <button
                    onClick={handleUpdate}
                    className="text-white text-lg w-full bg-zinc-900 px-5  py-2"
                  >
                    Approve
                  </button>
                </div>
                <div className="w-full">
                  <button
                    onClick={handleRejected}
                    className=" text-lg w-full border border-zinc-900 px-5  py-2"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ) : modalData?.status === "rejected" ? (
              <div className="w-full">
                <button
                  disabled
                  className=" text-lg w-full  bg-zinc-400  px-5  py-2"
                >
                  Rejected
                </button>
              </div>
            ) : (
              <button
                disabled
                className=" text-lg w-full  bg-zinc-400  px-5  py-2"
              >
                Approved
              </button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default TransactionModal;
