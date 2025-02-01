function assertEqual(expected, received) {

  if (typeof expected === "object") {
    const exp = JSON.stringify(expected)
    const rec = JSON.stringify(received);

    if (exp !== rec) {
      throw new Error(`Expected ${exp}, received ${rec}`);
    }
    return;
  }

  if (expected !== received) {
    throw new Error(`Expected ${expected}, received ${received}`);
  }
}

function assertArrayEqual(expected, received) {
  if (!Array.isArray(received)) {
    throw new Error(`Attendu tableau, reçu: ${typeof received}`);
  }
  assertEqual(expected.join(','), received.join(','));
}

function describe(description, callback) {
  const reporter = [];

  function it(description, testCallback) {
    try {
      testCallback();
      reporter.push({ valid: true, message: `✔️   Valide - ${description}` });
    } catch (e) {
      reporter.push({ valid: false, message: `❌   Échoué - ${description}: ${e.message}` });
    }
  }

  console.log(`📋 \x1b[36m ${description} \x1b[0m`);
  callback(it);

  reporter.forEach((result) => {
    const color = result.valid ? '\x1b[32m' : '\x1b[31m';
    console.log(color, result.message, '\x1b[0m');
  });

  console.log(
    `\x1b[36m Nombre de tests: ${reporter.length} \x1b[0m | \x1b[32m Valides: ${reporter.filter((e) => e.valid).length
    } \x1b[0m | \x1b[31m Échoués: ${reporter.filter((e) => !e.valid).length} \x1b[0m`
  );
}

module.exports = {
  describe,
  assertEqual,
  assertArrayEqual
};

