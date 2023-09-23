import React from 'react';

function UserProfileDropdown() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        <img className="user-avatar rounded-circle mr-2" src="images/avatars/0.jpg" alt="User Avatar" />
        <span className="d-none d-md-inline-block">Sierra Brooks</span>
      </a>
      <div className="dropdown-menu dropdown-menu-small">
        <a className="dropdown-item" href="user-profile-lite.html">
          <i className="material-icons">&#xE7FD;</i> Profile
        </a>
        <a className="dropdown-item" href="components-blog-posts.html">
          <i className="material-icons">vertical_split</i> Blog Posts
        </a>
        <a className="dropdown-item" href="add-new-post.html">
          <i className="material-icons">note_add</i> Add New Post
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item text-danger" href="#">
          <i className="material-icons text-danger">&#xE879;</i> Logout
        </a>
      </div>
    </li>
  );
}

export default UserProfileDropdown;
