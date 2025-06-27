var merge = function (nums1, m, nums2, n) {

    let p = m - 1;
    let q = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (q < 0) { break }

        if (p >= 0 && nums1[p] > nums2[q]) {
            nums1[i] = nums1[p];
            p--;
        } else {
            nums1[i] = nums2[q];
            q--
        }
    }
};