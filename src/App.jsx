import { Octokit } from '@octokit/core'
import { useState } from 'react'
import './assets/App.scss'
import Content from './components/Content'
import Header from './components/Header'

function App() {
  const [username, setUsername] = useState('')
  const [repositories, setRepositories] = useState([])
  const [user, setUser] = useState(null)
  const octokit = new Octokit()

  const handleSearch = async () => {
    try {
      const name = username.replace(/\s+/g, '-')
      const gitUser = await octokit.request('GET /users/{username}', {
        username: name,
      })
      setUser(gitUser.data)

      const gitRepo = await octokit.request('GET /users/{username}/repos', {
        username: name,
      })
      setRepositories(gitRepo.data)
      console.log(user)
    } catch (err) {
      setUser(null)
      setRepositories([])
    }
  }

  const onChange = (e) => setUsername(e.target.value)

  return (
    <div>
      <Header />
      <Content
        handleSearch={handleSearch}
        repositories={repositories}
        user={user}
        username={username}
        onChange={onChange}
        key={username.id}
      />
    </div>
  )
}

export default App
