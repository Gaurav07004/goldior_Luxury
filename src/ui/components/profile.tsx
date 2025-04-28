import React from "react";

interface ProfileCardProps {
  name: string;
  email: string; // Changed from 'role' to 'email' for clarity
  imageUrl: string;
  onLogout: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  imageUrl,
  onLogout,
}) => {
  return (
    <div className="bg-white text-black rounded-lg p-4 max-w-sm shadow-2xl">
      <div className="flex flex-col items-center">
        <img
          className="rounded-full border-4 border-[var(--theme-brown)] h-20 w-20 object-cover"
          src={imageUrl}
          alt={name}
        />

        <div className="mt-4 text-center">
          <p className="text-lg font-medium">{name}</p>
          <p className="text-sm font-medium">{email}</p>
          <button
            className="mt-6 bg-[var(--theme-brown)] text-white font-medium px-6 py-1 rounded-lg w-30 lg:mt-1 hover:bg-[var(--buttonHover)] duration-500"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
