import "core-js/es/promise";
import { Sha256 } from "@aws-crypto/sha256-browser";

document.querySelector("button").addEventListener("click", function () {
  const hash = new Sha256();
  hash.update("");
  hash.digest().then(
    function (result) {
      console.log("ok", result);
    },
    function (error) {
      console.log("fail", error);
    }
  );
});
