import { supabase } from '../supabaseClient'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('profile').select('*')
      if (error) console.error('Error:', error)
      else setProfiles(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>List Profile</h1>
      <ul>
        {profiles.map(p => (
          <li key={p.id}>{p.full_name}</li>
        ))}
      </ul>
    </div>
  )
}
