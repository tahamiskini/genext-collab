import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import boardApi from "../../api/boardApi";
import { AuthContext } from "../../config/Auth";
import EditableText from "../EditableText";
import UserControl from "../UserControl";
import { createUserHomeUrl } from "../../utils/string";
import BoardInviteCollaborator from "../../components/Board/BoardInviteCollaborator";
import BoardInviteCollaboratorForm from "../../components/Board/BoardInviteCollaboratorForm";

const BoardNav = ({ boardData, setBoardData }) => {
  const { user } = useContext(AuthContext);
  const BOARD_DIALOGS = {
    createBoard: "create-board",
    deleteBoard: "delete-board",
    addCollaborator: "add-collaborator",
  };
  const [activeDialog, setActiveDialog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleInviteCollaborator = async () => {
    setIsLoading(true);
    // setBoardData(...boardData,)
  };
  const handleBoardUpdate = async (updatedTitle) => {
    const updatedBoard = { ...boardData, title: updatedTitle };
    setBoardData(() => updatedBoard);

    try {
      await boardApi.update(updatedBoard.id, updatedBoard.title);
    } catch (error) {
      console.log(error);
    }
  };

  const titleStyle = {
    style: "font-bold text-gray-800 px-0.5 mx-1.5 focus:outline-blue text-xl",
  };

  return (
    <div className="bg-white bg-opacity-90 flex justify-between items-center py-3 px-8 mb-4 shadow">
      <div className="flex items-center text-xl font-bold">
        <Link
          to={createUserHomeUrl(user.username)}
          aria-label="Back to home"
          className="flex items-center opacity-90 px-1 py-0.5 mr-0.5 text-gray-500 hover:text-gray-600 transition-colors
          duration-100"
        >
          <span className="material-icons-outlined mr-1">home</span>
          Boards
        </Link>
        <span className="text-gray-500"> / </span>
        <EditableText
          style={titleStyle.style}
          dataText={boardData.title}
          dataUpdateFunc={handleBoardUpdate}
        />
      </div>
      <BoardInviteCollaboratorForm
        open={activeDialog === BOARD_DIALOGS.addCollaborator}
        onClose={() => setActiveDialog(null)}
        isLoading={isLoading}
        onAction={handleInviteCollaborator}
      />
      <div className="flex gap-7 items-center">
        <BoardInviteCollaborator
          onClick={() => setActiveDialog(BOARD_DIALOGS.addCollaborator)}
        />
        <UserControl />
      </div>
    </div>
  );
};

export default BoardNav;
