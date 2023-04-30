import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
<<<<<<< HEAD
      avatar: 'https://img-1307246870.cos.ap-beijing.myqcloud.com/mystrical_dreamer_avator.png',
      name: 'BruceHan',
      description: 'ChatGPT &#129395;',
=======
      avatar: 'https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg',
      name: 'ChenZhaoYu',
      description: 'Star on <a href="https://github.com/Chanzhaoyu/chatgpt-bot" class="text-blue-500" target="_blank" >GitHub</a>',
>>>>>>> upstream/main
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
