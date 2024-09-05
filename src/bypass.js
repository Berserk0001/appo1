"use strict";export function bypass(e,n,r){const s=e.params.originSize||0;n.header("x-proxy-bypass",1);if(s>0){n.header("content-length",s)}return n.code(200).send(r)}
