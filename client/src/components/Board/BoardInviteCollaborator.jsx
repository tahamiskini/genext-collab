const BoardInviteCollaborator = ({ onClick }) => {
  return (
    <div className="whitespace-nowrap  mx-4 lg:mr-0">
      <div className="flex flex-col leading-relaxed text-center">
        <button
          onClick={() => onClick(true)}
          className="flex items-center justify-center rounded-md text-2xl bg-radial-gradient text-white
          shadow px-6 py-3 mb-2 bg-opacity-90 hover:bg-opacity-100 hover:shadow-md
          transition-all duration-300"
        >
          <span
            aria-label="Invite collaborators"
            className="material-icons-outlined mr-3"
          >
            dashboard_customize
          </span>
          Invite collaborators
        </button>
      </div>
    </div>
  );
};

export default BoardInviteCollaborator;
