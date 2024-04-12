/**
 * @fileoverview no-ppe-tcc-link
 */
"use strict";
const rule = require('../../../lib/rules/no-ppe-tcc-link'),
    RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester();
ruleTester.run('no-ppe-tcc-link', rule, {
    // 这是合法的可以通过规则的案例
    valid: [
        {
            code: `var a = 'https://tosv.example.org/obj/tcc-config-web/tcc-v2-example-default'`,
        },
    ],
    invalid: [
        {
            code: `var a = 'https://tosv.example.org/obj/tcc-config-web/tcc-v2-example-default-ppe_example'`,
            errors: [{ message: '不允许使用ppe环境下的tcc: https://tosv.example.org/obj/tcc-config-web/tcc-v2-example-default-ppe_example.' }],
            output: "var a = 'https://tosv.example.org/obj/tcc-config-web/tcc-v2-example-default'"
        },
        {
            code: `var url = 'https://tosv.example.org/obj/tcc-config-web/tcc-v2-data-ecom.smartop.data-default-ppe_123';`,
            errors: [{ message: '不允许使用ppe环境下的tcc: https://tosv.example.org/obj/tcc-config-web/tcc-v2-data-ecom.smartop.data-default-ppe_123.' }],
            output: "var url = 'https://tosv.example.org/obj/tcc-config-web/tcc-v2-data-ecom.smartop.data-default';"
        },
    ],
});
