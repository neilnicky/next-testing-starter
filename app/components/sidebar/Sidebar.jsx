'use client'
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    return (
        <div>
            <button data-testid="sidebar-toggle" className="p-2 text-white bg-blue-500 hover:bg-blue-700" onClick={toggleSidebar}>
                ☰
            </button>
            {isOpen && (
                <div data-testid="sidebar" className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-5 dark:bg-gray-900">
                    <button data-testid="sidebar-close" className="text-white bg-transparent hover:bg-gray-700 p-2 mb-4 rounded-lg" onClick={closeSidebar}>
                        X
                    </button>
                    <Link href="/" className="block my-2 hover:text-blue-300" onClick={closeSidebar} data-testid="sidebar-link-home">
                        Home
                    </Link>
                    <Link href="/about" className="block my-2 hover:text-blue-300" onClick={closeSidebar} data-testid="sidebar-link-about">
                        About
                    </Link>
                    <Link href="/settings" className="block my-2 hover:text-blue-300" onClick={closeSidebar} data-testid="sidebar-link-settings">
                        Settings
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
