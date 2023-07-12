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
            { "id": 16777506, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
            { "id": 16777507, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
            { "id": 16777508, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
            { "id": 16777509, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
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
            new ItemData({ "id": 16777280, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777547, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777556, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777274, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777549, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777303, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777279, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777253, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777501, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777250, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777505, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777290, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777557, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" })
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
            new ItemData({ "id": 16777272, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777563, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777271, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777265, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777552, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777270, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777263, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777500, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777268, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777510, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777269, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" })
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
            new ItemData({ "id": 16777299, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777553, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777302, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777278, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777518, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777536, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777274, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777524, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, null),
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map