/** True on iPhone/iPad/iPod. iPadOS 13+ reports as "MacIntel", so we also
 *  treat a touch-capable Mac as iOS. Used to show the Silent Mode hint, which
 *  only applies to iOS (its hardware ring/silent switch mutes web audio).
 *
 *  Note: there is NO web API to read the silent-switch *state* — only the
 *  platform can be detected, so the hint is advisory. */
export function isIOS(): boolean {
	if (typeof navigator === "undefined") return false;
	const ua = navigator.userAgent || "";
	if (/iPad|iPhone|iPod/.test(ua)) return true;
	return navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
