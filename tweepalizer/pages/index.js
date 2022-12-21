import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ProfiledUsersListView from '../components/ProfiledUsersListView'
import ProfileNewUserButton from '../components/ProfileNewUserButton'



export function getServerSideProps() {

  const usersData = [
    {
      "name": "fred"
    },
    {
      "name": "jorge"
    }
  ]

  return {
    props: {
      usersData
    }
  }
}

export default function Home(props) {
  return (
    <div>
      <div>
        <h1> Twit Profiler </h1>
      </div>
      <div>
        <ProfileNewUserButton />
      </div>
      <div>
        <ProfiledUsersListView initialUserData={props.usersData} />
      </div>
    </div>
  )
}
