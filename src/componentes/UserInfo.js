export class UserInfo {
  constructor({ userName, userJob, avatar }) {
    this._userName = userName;
    this._userJob = userJob;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };
  }

  setUserInfo(name, job, image) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
    this._avatar.src = image;
  }
}
