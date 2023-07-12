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
            { "id": 16777541, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
            { "id": 16777555, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
            { "id": 16777303, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
            { "id": 16777540, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
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
            new ItemData({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777339, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777238, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777301, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777258, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777553, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777287, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777535, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777263, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777526, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777237, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777547, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777546, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777274, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777532, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" })
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
            new ItemData({ "id": 16777256, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777340, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777255, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777249, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777549, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777254, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777247, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777558, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777252, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777248, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777307, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777253, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" })
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
            new ItemData({ "id": 16777283, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777525, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777286, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }),
            new ItemData({ "id": 16777262, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777567, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777238, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777320, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777258, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777309, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, null),
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map