"use client"
import React from 'react'
import withAuth from '@/components/auth/with-auth'

const ClientSideHoc = () => {
  return (
    <div>This page is protected route on client side HOC.</div>
  )
}

export default withAuth(ClientSideHoc)