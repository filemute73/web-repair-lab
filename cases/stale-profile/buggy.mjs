export class ProfileStore {
  constructor(profile) {
    this.profile = profile;
    this.listeners = new Set();
  }
  subscribe(listener) { this.listeners.add(listener); }
  update(patch) {
    Object.assign(this.profile, patch);
    // React-style consumers comparing references do not see a new value.
    return this.profile;
  }
}
