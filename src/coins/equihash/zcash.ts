import { Hash } from "../../hash";
import { Algorithms } from "../../algorithms";

export var coin = {
  name: "ZCash",
  names: [
    "zec", "equihash",
  ],
  NiceHash: {
    hashrate: Hash.MSOL,
    id: Algorithms.Equihash,
  },
  WhatToMine: {
    hashrate: 1000 * 1000,
    id: 166,
  },
  enabled: true,
};
