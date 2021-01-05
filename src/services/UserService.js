const UserService = {}

UserService.getAvatar = () =>
  fetch('/api/user/avatar').then((response) => response.json())

export default UserService
