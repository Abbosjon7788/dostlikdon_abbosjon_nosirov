import React from 'react';

const AdminLayout = () => {
    return (
        <div className="flex">
            <div className="w-1/4 p-6 overflow-y-auto h-screen bg-green-400">
                <h1>Admin menus</h1>
            </div>
            <div className="w-3/4 p-6 h-screen overflow-y-auto bg-gray-200">
                <h1>Admin menu content</h1>
            </div>
        </div>
    );
};

export default AdminLayout;