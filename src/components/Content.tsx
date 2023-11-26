import React from 'react'

const Content = ({ username, user, repositories, handleSearch, onChange }) => {
  return (
    <div className="main">
      <div className="main__top">
        <input
          type="text"
          value={username}
          onChange={onChange}
          placeholder="Введите ник"
          className="main__field"
        />
        <button onClick={handleSearch} className="main__button">
          Search
        </button>
      </div>

      <div className="repo">
        {user && (
          <div className="main__user">
            <img src={user.avatar_url} alt="Avatar" style={{ width: '100px', height: '100px' }} />
            <div>
              <h1>{user.login}</h1>
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  Github page
                </a>
              </p>
            </div>
          </div>
        )}
        {repositories.map((repo) => (
          <div className="item" key={repo.id}>
            <img
              width={30}
              draggable={false}
              height={30}
              src="/github2.png"
              className="item__logo"
            />
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content
