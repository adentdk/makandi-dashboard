const state = () => ({
  clientToken: null,
  loading: false,
  profile: {
    id: null,
    email: null,
    username: null,
    image_url: null,
    is_password_changed: null,
    name: null,
    phone: null,
    role: {
      name: null
    }
  },
  companyProfile: {
    name: null
  },
  accesses: []
})

export default state
