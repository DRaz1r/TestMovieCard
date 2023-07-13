/**
 * 收藏按钮变化保存-首选项数据库
 */


// 导入首选项数据库
import dataPreferences from '@ohos.data.preferences';
import Logger from './Logger';

const TAG = '[PreferencesUtil]';
const PREFERENCES_NAME = 'myPreferences';
//const KEY_APP_FONT_SIZE = 'appFontSize';

/**
 * 首选项数据库
 * The PreferencesUtil provides preferences of create, save and query.
 */
export class PreferencesUtil {

  // 方法-创建首选项数据库
  createCollectPreferences(context) {
    // 先将Promise<Preferences>保存到全局
    globalThis.getCollectPreferences = (() => {
      let preferences: Promise<dataPreferences.Preferences> = dataPreferences.getPreferences(context, PREFERENCES_NAME);
      return preferences;
    });
  }

  // 保存编号
  //private  collectID: string


  //保存默认收藏情况
  saveDefaultCollect(collectID: string, collect: boolean) {
    globalThis.getCollectPreferences().then((preferences) => {


      // 拿到preferences实例后，先判断是否存在该字段
      preferences.has(collectID).then(async (isExist) => {
        Logger.info(TAG, 'preferences has changeCollect is ' + isExist);
        // 如果不存在，调用保存方法
        if (!isExist) {
          // 将收藏情况写入到preferences实例
          await preferences.put(collectID, collect);
          // 将preferences实例数据进行持久化
          preferences.flush();
        }
      }).catch((err) => {
        Logger.error(TAG, 'Has the value failed with err: ' + err);
      });
    }).catch((err) => {
      Logger.error(TAG, 'Get the preferences failed, err: ' + err);
    });
  }

  //方法-保存修改的数据
  saveChangeCollect(collectID: string, collect: boolean) {
    globalThis.getCollectPreferences().then(async (preferences) => {



      await preferences.put(collectID, collect);
      preferences.flush();
    }).catch((err) => {
      Logger.error(TAG, 'put the preferences failed, err: ' + err);
    });
  }

  //方法-读取首选项中的数据
  async getChangeCollect(collectID: string) {


    let collect: boolean = false;
    const preferences =  await globalThis.getCollectPreferences();
    collect =  await preferences.get(collectID, collect);
    return collect;
  }

  //方法-删除首选项中的数据
  async deleteChangeCollect(collectID: string) {
    const preferences: dataPreferences.Preferences = await globalThis.getCollectPreferences();



    let deleteValue = preferences.delete(collectID);
    deleteValue.then(() => {
      Logger.info(TAG, 'Succeeded in deleting the key appFontSize.');
    }).catch((err) => {
      Logger.error(TAG, 'Failed to delete the key appFontSize. Cause: ' + err);
    });
  }
}

export default new PreferencesUtil();