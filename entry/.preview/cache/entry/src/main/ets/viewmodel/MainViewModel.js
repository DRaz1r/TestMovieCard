/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import ItemData from '@bundle:com.huawei.moviecard/entry/ets/common/bean/ItemData';
/**
 * Binds data to components and provides interfaces.
 */
export class MainViewModel {
    /**
     * Get swiper image data.
     *
     * @return {Array<Resource>} swiperImages.
     */
    getSwiperImages() {
        let swiperImages = [
            { "id": 16777569, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
            { "id": 16777367, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
            { "id": 16777375, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
            { "id": 16777365, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
        ];
        return swiperImages;
    }
    /**
     * Get data of the first grid.
     *
     * @return {Array<PageResource>} firstGridData.
     */
    getFirstGridData() {
        let firstGridData = [
            new ItemData({ "id": 16777249, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777350, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777565, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777245, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777563, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777310, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777344, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777305, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777352, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777302, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777287, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777300, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777398, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777309, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777290, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" })
        ];
        return firstGridData;
    }
    /**
     * Get data of the second grid.
     *
     * @return {Array<PageResource>} secondGridData.
     */
    getSecondGridData() {
        let secondGridData = [
            new ItemData({ "id": 16777244, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777396, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777385, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777381, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777559, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777384, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777379, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777374, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777382, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777380, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777353, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777383, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" })
        ];
        return secondGridData;
    }
    /**
     * Get data of the setting list.
     *
     * @return {Array<PageResource>} settingListData.
     */
    getSettingListData() {
        let settingListData = [
            new ItemData({ "id": 16777391, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777347, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777393, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777248, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777289, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777268, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777245, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777564, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, null),
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map