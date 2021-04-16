import Tab from '../models/tab.model';

const createTabs = async (req, res) => {
  try {
    const { name, description, dataPoints } = req.body;

    const newTab = new Tab({ name, description, dataPoints });

    const savedTab = await newTab.save();

    const tab = {
      name: savedTab.name,
      description: savedTab.description,
      dataPoints: savedTab.dataPoints,
    };

    return res.status(200).send({
      message: 'Tab created successfully',
      status: 'success',
      data: { tab },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: err.message,
      status: 'error',
      data: null,
    });
  }
};

export const retrieveTabs = async (req, res) => {
  try {
    const tabsData = await Tab.find();

    const tabs = tabsData.map((tab) => ({
      id: tab._id,
      name: tab.name,
      description: tab.description,
      dataPoints: tab.dataPoints,
    }));

    return res.status(200).send({
      message: 'Tabs created successfully',
      status: 'success',
      data: { tabs },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: err.message,
      status: 'error',
      data: null,
    });
  }
};

export const editTab = async (req, res) => {
  try {
    const { tabId } = req.params;

    const { name, description, dataPoints } = req.body;

    const tabUpdate = await Tab.findOneAndUpdate({ _id: tabId },
      {
        name,
        description,
        dataPoints,
      }, { new: true });

    if (!tabUpdate) {
      return res.status(400).send({
        message: 'Tab does not exist',
        status: 'error',
        data: null,
      });
    }

    const tab = {
      name: tabUpdate.name,
      description: tabUpdate.description,
      dataPoints: tabUpdate.dataPoints,
    };

    return res.status(200).send({
      message: 'Tab was updated successfully',
      status: 'success',
      data: {
        tab,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: err.message,
      status: 'error',
      data: null,
    });
  }
};

export const destroyTab = async (req, res) => {
  try {
    const { tabId } = req.params;

    await Tab.deleteOne({ _id: tabId });

    return res.status(200).send({
      message: 'Tab was deleted successfully',
      status: 'success',
      data: null,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: err.message,
      status: 'error',
      data: null,
    });
  }
};

export default createTabs;
