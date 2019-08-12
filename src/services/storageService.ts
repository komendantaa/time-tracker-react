export class StorageService {
  setItem(key: string, data: any) {
    window.localStorage.setItem(
      key,
      typeof data === 'object' ? JSON.stringify(data) : data
    );
  }

  getItem<T>(key: string): T {
    return JSON.parse(window.localStorage.getItem(key) || '');
  }

  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
}
