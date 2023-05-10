"use client";

import clsx from "clsx";

export default function ScrapWarning({ className }: { className: string }) {
    return (
        <div
            className={clsx(
                "flex flex-col gap-1 rounded border-4 border-dashed border-amber-300 bg-amber-50 p-4 text-sm text-amber-900",
                className
            )}
        >
            <p className="flex items-center gap-1 text-base">
                <span className="text-lg">🤔</span>
                この記事はスクラップです
            </p>
            <p>
                このサイトにおける「スクラップ」とは、まともな技術記事投稿サービスへ投稿するには憚られるような短さや、情報や品質が十分でないと判断している記事を指します。
            </p>
            <p>
                この記事は最小限の労力で提供されているため、正確性や信頼性を保証できません。記載されている内容を盲目的に信じないでください。
            </p>
        </div>
    );
}
