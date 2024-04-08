/**
 * @fileoverview no-ppe-tcc-link
 * @author zhanghengxiang2014
 */
module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: '不允许使用ppe环境下的tcc',
        },
        fixable: 'code',
        schema: [],
    },
    create(context) {
        const incorrectPpeLinkPattern = /https:\/\/[^\/]+\/obj\/tcc-config-web(-[^\/]+)?\/[^\/]+-ppe_[^\/]+/g;
        function fixPpeLink(text) {
            return `'${text.slice().replace(/-ppe_.*$/, '')}'`;
        }
        return {
            Literal: function (node) {
                if (typeof node.value === 'string' && incorrectPpeLinkPattern.test(node.value)) {
                    context.report({
                        node: node,
                        message: `不允许使用ppe环境下的tcc: ${node.value}.`,
                        fix: fixer => {
                            return fixer.replaceText(node, fixPpeLink(node.value));
                        },
                    });
                }
            },
        };
    },
};
