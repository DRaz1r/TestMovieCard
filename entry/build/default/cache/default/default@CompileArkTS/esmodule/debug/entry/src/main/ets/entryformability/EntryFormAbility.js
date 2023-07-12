import FormExtensionAbility from '@ohos:app.form.FormExtensionAbility';
import formBindingData from '@ohos:app.form.formBindingData';
import formProvider from '@ohos:app.form.formProvider';
import CommonConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
import FormBean from '@bundle:com.huawei.moviecard/entry/ets/common/bean/FormBean';
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import Logger from '@bundle:com.huawei.moviecard/entry/ets/common/utils/Logger';
/**
 * Form management of Ability.
 */
export default class EntryFormAbility extends FormExtensionAbility {
    onAddForm(want) {
        let formId = want.parameters[CommonConstants.IDENTITY_KEY];
        let formName = want.parameters[CommonConstants.NAME_KEY];
        let dimensionFlag = want.parameters[CommonConstants.DIMENSION_KEY];
        CommonUtils.createRdbStore(this.context).then((rdbStore) => {
            let form = new FormBean();
            form.formId = formId;
            form.formName = formName;
            form.dimension = dimensionFlag;
            CommonUtils.insertForm(form, rdbStore);
        }).catch((error) => {
            Logger.error(CommonConstants.TAG_FORM_ABILITY, 'onAddForm create rdb error ' + JSON.stringify(error));
        });
        // Refresh every five minutes.
        formProvider.setFormNextRefreshTime(formId, CommonConstants.FIVE_MINUTES, (error, data) => {
            if (error) {
                Logger.error(CommonConstants.TAG_FORM_ABILITY, 'setRefreshTime error ' + JSON.stringify(error));
            }
            else {
                Logger.info(CommonConstants.TAG_FORM_ABILITY, 'setRefreshTime success ' + JSON.stringify(data));
            }
        });
        let listData = CommonUtils.getListData();
        let formData = CommonUtils.getFormData(listData);
        let tem = formBindingData.createFormBindingData(formData);
        formProvider.updateForm(formId, tem).catch((err) => {
            Logger.error('error', `processDayData updateForm, err: ${JSON.stringify(err)}`);
        });
        return tem;
    }
    onUpdateForm(formId) {
        CommonUtils.createRdbStore(this.context).then((rdbStore) => {
            CommonUtils.updateMovieCardData(rdbStore);
        }).catch((error) => {
            Logger.error(CommonConstants.TAG_FORM_ABILITY, 'onUpdateForm create rdb error ' + JSON.stringify(error));
        });
        // Refresh every five minutes.
        formProvider.setFormNextRefreshTime(formId, CommonConstants.FIVE_MINUTES, (error, data) => {
            if (error) {
                Logger.error(CommonConstants.TAG_FORM_ABILITY, 'update setTime error' + JSON.stringify(error));
            }
            else {
                Logger.info(CommonConstants.TAG_FORM_ABILITY, 'update setTime success ' + JSON.stringify(data));
            }
        });
    }
    onRemoveForm(formId) {
        // Deleting card information from the database.
        CommonUtils.createRdbStore(this.context).then((rdbStore) => {
            CommonUtils.deleteFormData(formId, rdbStore);
        }).catch((error) => {
            Logger.error(CommonConstants.TAG_FORM_ABILITY, 'removeForm create rdb error ' + JSON.stringify(error));
        });
    }
}
;
//# sourceMappingURL=EntryFormAbility.js.map