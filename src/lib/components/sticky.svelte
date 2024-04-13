<script lang="ts">
	import roughjs from 'roughjs';

	export let as: keyof HTMLElementTagNameMap = 'div';

	function rough(node: SVGSVGElement) {
		const svg_el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		const svg = roughjs.svg(svg_el);
		let back: SVGElement;
		const resize_observer = new ResizeObserver(([entry]) => {
			const [{ inlineSize: width, blockSize: height }] = entry.borderBoxSize;
			svg_el.setAttribute('viewBox', `0 0 ${width} ${height}`);
			const new_back = svg.rectangle(0, 0, width, height, {
				fill: 'white',
				fillStyle: 'solid',
				strokeWidth: 10,
				preserveVertices: true
			});
			try {
				svg_el.replaceChild(back, new_back);
			} catch {
				svg_el.append(new_back);
			}
			back = new_back;
		});
		svg_el.style.position = 'absolute';
		svg_el.style.inset = '0';
		svg_el.style.zIndex = '-1';
		svg_el.style.transform = `rotate(${Math.random() * 2 * (Math.random() > 0.5 ? 1 : -1)}deg)`;
		node.prepend(svg_el);
		resize_observer.observe(node);
		return {
			destroy() {
				resize_observer.disconnect();
			}
		};
	}
</script>

<svelte:element this={as} {...$$restProps} class:relative={true} use:rough>
	<slot />
</svelte:element>
