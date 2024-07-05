import React from 'react'
import Logo from './Logo'
import Search from './Search'
import User from './User'
import GitHub from './GitHub'
import LeetCode from './LeetCode'
import SendEmail from './SendEmail'
import '../css/Header.css'

export default function Header() {
  const gitHubURL = 'https://github.com/kimthienlang'
  const leetcodeURL = 'https://leetcode.com/u/kimthienlang/'
  const sendEmailURL = 'https://mail.google.com/mail/u/0/#inbox'

  function handleClick(url){
    window.open(url)
  }

  return (
    <div className="header">
        <Logo />
        <Search />
        <GitHub handleClick={()=>handleClick(gitHubURL)}/>
        <LeetCode handleClick={()=>handleClick(leetcodeURL)}/>
        <SendEmail handleClick={()=>handleClick(sendEmailURL)}/>
        <User />
    </div>
  )
}
