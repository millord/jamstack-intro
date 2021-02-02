const listRepos = async username => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  ).then(res => res.json())
  .catch((error) => {
    console.error(error)
  })

  const markup =  repos.map(res => `
  <li><a href="${res.html_url}"> 
  ${res.name}
  </a>
  (**** ${res.stargazers_count})
  </li>`).join('')

  const content = document.getElementById('content')

  content.innerHTML = `<ul>${markup}</ul>`

}


listRepos('millord')