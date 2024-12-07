// Portfolio/app/components/ThemeToggle.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // Check for saved user preference in localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else {
            // Default to light mode
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        const newTheme = !isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded"
        >
            {isDarkMode ? <Sun className='w-5 h-5'/> : <Moon className='w-5 h-5'/>}
        </button>
    );
};

export default ThemeToggle;