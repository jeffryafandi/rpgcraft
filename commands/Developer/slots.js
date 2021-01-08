const slots = [":pear:", ":tangerine:", ":lemon:"];
//,"🍒", "🍋", "🍌", "🔔"];

module.exports.run = async (client, msg, args) => {
  const db = await client.player.findOne(
    {
      id: msg.author.id
    },
    (err, gg) => {
      if (err) console.error(err);
      if (!gg) {
        return msg.channel.send(client.config.start);
      }
    }
  );
  await db.updateOne({ cd: Date.now() });
  const s1 = slots[Math.floor(Math.random() * slots.length)];
  const s2 = slots[Math.floor(Math.random() * slots.length)];
  const s3 = slots[Math.floor(Math.random() * slots.length)];
  const s1a = slots[Math.floor(Math.random() * slots.length)];
  const s2a = slots[Math.floor(Math.random() * slots.length)];
  const s3a = slots[Math.floor(Math.random() * slots.length)];
  const s1b = slots[Math.floor(Math.random() * slots.length)];
  const s2b = slots[Math.floor(Math.random() * slots.length)];
  const s3b = slots[Math.floor(Math.random() * slots.length)];
  const s1c = slots[Math.floor(Math.random() * slots.length)];
  const s2c = slots[Math.floor(Math.random() * slots.length)];
  const s3c = slots[Math.floor(Math.random() * slots.length)];
  const s1d = slots[Math.floor(Math.random() * slots.length)];
  const s2d = slots[Math.floor(Math.random() * slots.length)];
  const s3d = slots[Math.floor(Math.random() * slots.length)];
  let timeout = 1000;

  msg.channel.send(`-----[SLOTS]-----\n---⟩${s1}:${s2}:${s3}⟨---`).then(m =>
    setTimeout(() => {
      m.edit(`-----[SLOTS]-----\n---⟩${s1a}:${s2a}:${s3a}⟨---`).then(m =>
        setTimeout(() => {
          m.edit(`-----[SLOTS]-----\n---⟩${s1b}:${s2b}:${s3b}⟨---`).then(m =>
            setTimeout(() => {
              m.edit(`-----[SLOTS]-----\n---⟩${s1c}:${s2c}:${s3c}⟨---`).then(
                m =>
                  setTimeout(async() => {
                    if (s1d === s2d && s1d === s3d && s2d === s3d) {
                      m.edit(
                        `-----[SLOTS]-----\n---⟩${s1d}:${s2d}:${s3d}⟨---\n You won 200 ${client.config.icon.coin}`
                      );
                      if (!db.coin) {
                        await db.updateOne({ coin: 200 });
                      } else {
                        await db.updateOne({ coin: db.coin + 200 });
                      }
                    } else {
                      m.edit(
                        `-----[SLOTS]-----\n---⟩${s1d}:${s2d}:${s3d}⟨---\nYou lost`
                      );
                    }
                  }, timeout)
              );
            }, timeout)
          );
        }, timeout)
      );
    }, timeout)
  );
};
module.exports.help = {
  name: "slots",
  aliases: []
};
