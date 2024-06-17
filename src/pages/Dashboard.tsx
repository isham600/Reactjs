import { useState } from "react";
import NewBroadcast from "../containers/New-Broadcast";
import Modal from "../components/Modal";

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isAsideBarOpen, setIsAsideBarOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleUserClick = () => setIsPopUpOpen(!isPopUpOpen);
    const handleAsideBarClick = () => setIsAsideBarOpen(!isAsideBarOpen);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main>
            <nav className="flex justify-center gap-10 border-b-2 py-4 lg:items-center lg:justify-around">
                <div
                    className="absolute left-10 block cursor-pointer lg:hidden"
                    onClick={handleAsideBarClick}
                >
                    <img
                        src="/hamburger-icon.jpg"
                        width={28}
                        height={28}
                        alt="hamburger"
                    />
                </div>

                <div className="flex gap-7">
                    <h2 className="text-5xl font-semibold text-[#d61344] lg:text-3xl">
                        PuRat
                    </h2>
                    <p className=" hidden h-9 w-[1.5px] bg-slate-300 lg:block"></p>
                </div>

                <div className="hidden lg:block">
                    <ul className="flex gap-16 text-gray-500">
                        <li className="flex items-center justify-center gap-2">
                            <img
                                src="/education.svg"
                                width={20}
                                height={20}
                                alt="logo"
                            />
                            <span>Team Inbox</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <img
                                src="/education.svg"
                                width={20}
                                height={20}
                                alt="logo"
                            />
                            <span>Broadcast</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <img
                                src="/education.svg"
                                width={20}
                                height={20}
                                alt="logo"
                            />
                            <span>Chatbots</span>
                        </li>
                        <li>
                            <span>...More</span>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:block">
                    <div className="flex gap-3">
                        <div>
                            <img
                                src="/user.png"
                                width={30}
                                height={30}
                                alt="user"
                            />
                        </div>
                        <p className="h-9 w-[2px] bg-slate-300"></p>
                        <div
                            onClick={handleUserClick}
                            className="cursor-pointer"
                        >
                            <img
                                src="/user.png"
                                width={30}
                                height={30}
                                alt="user"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                className={`lg:block ${isAsideBarOpen ? "block" : "hidden"}`}
            >
                <div className="h-[90vh] w-60 border-r-2 px-4 py-5">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-2">
                            <img
                                src="/education.svg"
                                width={24}
                                height={24}
                                alt="logo"
                            />
                            <span>Broadcast history</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img
                                src="/education.svg"
                                width={24}
                                height={24}
                                alt="logo"
                            />
                            <span>Scheduled Broadcast</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img
                                src="/education.svg"
                                width={24}
                                height={24}
                                alt="logo"
                            />
                            <span>Template Message</span>
                        </li>
                    </ul>
                </div>
            </aside>

            <button
                className="bg-blue-600 text-white font-medium rounded px-5 py-2 cursor-pointer hover:bg-blue-500 absolute right-4 top-24"
                onClick={handleModal}
            >
                New Broadcast
            </button>

            {isModalOpen && (
                <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                    <NewBroadcast closeModal={closeModal} />
                </Modal>
            )}
        </main>
    );
};

export default Dashboard;
