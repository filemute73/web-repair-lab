export class ProfileStore {
  constructor(profile) {
    this.profile = { ...profile };
    this.listeners = new Set();
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  update(patch) {
    this.profile = { ...this.profile, ...patch };
    for (const listener of this.listeners) listener(this.profile);
    return this.profile;
  }
}
